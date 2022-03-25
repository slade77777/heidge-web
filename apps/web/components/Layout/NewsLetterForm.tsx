import { memo, useCallback, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { toast, useMutation } from "shared";
import { subscribeNews } from "../../api/subscribe";
import { EmailReg } from "../../constants/enum";

const NewsLetterForm = () => {
  const [email, setEmail] = useState("");
  const mutation = useMutation(subscribeNews);

  const submit = useCallback(() => {
    mutation
      .mutateAsync(email)
      .then(() => {
        toast.success("Subscribe successfully!");
      })
      .catch((e: any) => {
        toast.error(e.message || "Something wrong!");
      });
  }, []);
  return (
    <div className="w-full">
      <p className="text-white text-xl">Subscribe To Our Newsletter</p>
      <div className="flex flex-row mt-2 gap-2">
        <Input
          placeholder="Enter Email"
          className="w-full"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          color="success"
          auto
          onClick={submit}
          disabled={!email || mutation.isLoading || !email.match(EmailReg)}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default memo(NewsLetterForm);
