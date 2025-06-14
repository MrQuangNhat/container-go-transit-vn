
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ProfileInfo {
  fullName: string;
  phone: string;
  address: string;
  // Không cho thay đổi role, gmail nên không cần field này ở form
  gmail: string;
  role: string;
}

const DEFAULT_PROFILE: ProfileInfo = {
  fullName: "",
  phone: "",
  address: "",
  gmail: "",
  role: "",
};

const LOCAL_KEY = "user_profile_info";

function getProfileData(): ProfileInfo {
  if (typeof window === "undefined") return DEFAULT_PROFILE;
  const raw = localStorage.getItem(LOCAL_KEY);
  if (raw) {
    try {
      return { ...DEFAULT_PROFILE, ...JSON.parse(raw) };
    } catch {
      return DEFAULT_PROFILE;
    }
  }
  return DEFAULT_PROFILE;
}

function saveProfileData(profile: ProfileInfo) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(profile));
}

export default function ProfileDialog({
  trigger,
}: {
  trigger?: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const [profile, setProfile] = React.useState<ProfileInfo>(DEFAULT_PROFILE);
  const [editProfile, setEditProfile] = React.useState<ProfileInfo>(
    DEFAULT_PROFILE
  );

  React.useEffect(() => {
    if (open) {
      const data = getProfileData();
      setProfile(data);
      setEditProfile(data);
    }
  }, [open]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setEditProfile((p) => ({ ...p, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    saveProfileData({ ...profile, ...editProfile });
    setProfile({ ...profile, ...editProfile });
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="outline" size="sm">
            Thông tin cá nhân
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cập nhật thông tin cá nhân</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label className="block text-sm mb-1">Họ và tên</label>
            <Input
              name="fullName"
              value={editProfile.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Số điện thoại</label>
            <Input
              name="phone"
              value={editProfile.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Địa chỉ</label>
            <Input
              name="address"
              value={editProfile.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <Input value={profile.gmail} readOnly className="bg-gray-100" />
          </div>
          <div>
            <label className="block text-sm mb-1">Vai trò</label>
            <Input value={profile.role || "Khách hàng"} readOnly className="bg-gray-100" />
          </div>
          <DialogFooter>
            <Button type="submit">Lưu thông tin</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
