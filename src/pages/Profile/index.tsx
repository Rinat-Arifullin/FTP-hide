import Input from "components/common/Input";
import Button from "components/common/Button";
import AuthLayout from "layouts/AuthLayout";

import cx from "./index.module.scss";

const ProfilePage = () => {
  return (
    <AuthLayout title="Profile">
      <div className={cx.wrapper}>
        <div className={cx.inputs}>
          <Input placeholder="Name..." />
          <Input placeholder="Email..." />
          <Input placeholder="Avatar URL..." />
          <div>
            <Button theme="success">save</Button>
          </div>
        </div>
        <div className={cx.avatar}>
          <img
            src={""}
            alt={"avatar"}
            onError={(event) => {
              (event.target as any).style.display = "none";
            }}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default ProfilePage;
