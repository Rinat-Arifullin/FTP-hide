import AuthLayout from "layouts/AuthLayout";
import Input from "components/common/Input";
import Button from "components/common/Button";

const AuthPage = () => {
  return (
    <AuthLayout title={"Login"}>
      <div>
        <Input />
        <Input />
        <Input />
        <Input />
        <div>
          <Button></Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default AuthPage;
