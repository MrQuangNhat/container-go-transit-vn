
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ProfileInfo {
  fullName: string;
  phone: string;
  address: string;
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

const ProfilePage = () => {
  const [profile, setProfile] = React.useState<ProfileInfo>(DEFAULT_PROFILE);
  const [editProfile, setEditProfile] = React.useState<ProfileInfo>(DEFAULT_PROFILE);
  const [editing, setEditing] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const data = getProfileData();
    setProfile(data);
    setEditProfile(data);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setEditProfile((p) => ({ ...p, [name]: value }));
  }

  function handleEdit() {
    setEditing(true);
    setSaved(false);
  }

  function handleCancel() {
    setEditProfile(profile);
    setEditing(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    saveProfileData({ ...profile, ...editProfile });
    setProfile({ ...profile, ...editProfile });
    setEditing(false);
    setSaved(true);
  }

  return (
    <div className="container mx-auto max-w-lg py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
          ← Trang chủ
        </Button>
        <h1 className="ml-3 text-2xl font-bold text-foreground">Your Profile</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5 bg-white dark:bg-background shadow p-6 rounded-lg border">
        <div>
          <label className="block text-sm mb-1">Họ và tên</label>
          <Input
            name="fullName"
            value={editing ? editProfile.fullName : profile.fullName}
            onChange={handleChange}
            readOnly={!editing}
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Số điện thoại</label>
          <Input
            name="phone"
            value={editing ? editProfile.phone : profile.phone}
            onChange={handleChange}
            readOnly={!editing}
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Địa chỉ</label>
          <Input
            name="address"
            value={editing ? editProfile.address : profile.address}
            onChange={handleChange}
            readOnly={!editing}
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
        {editing ? (
          <div className="flex gap-3 justify-end pt-2">
            <Button type="button" variant="secondary" onClick={handleCancel}>
              Huỷ
            </Button>
            <Button type="submit">Lưu thông tin</Button>
          </div>
        ) : (
          <div className="flex gap-3 justify-end pt-2">
            <Button type="button" onClick={handleEdit}>
              Chỉnh sửa
            </Button>
          </div>
        )}
        {saved && (
          <div className="text-green-600 text-sm mt-2 text-center">
            Đã lưu thông tin thành công!
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfilePage;
