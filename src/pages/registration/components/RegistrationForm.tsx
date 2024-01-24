import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserRepository } from "../../../hooks/useUserRepository";
import {
  TRegistrationFormSchema,
  registrationFormSchema,
} from "./types/registrationFormSchema";
import { useNavigate } from "react-router";

/**
 * 登録フォーム
 *
 * @author nagisano33
 */
export function RegistrationForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<TRegistrationFormSchema>({
    defaultValues: {
      name: undefined,
    },
    resolver: zodResolver(registrationFormSchema),
  });

  const { register: registerUser } = useUserRepository();

  const navigate = useNavigate();

  function onSubmit({ name }: TRegistrationFormSchema) {
    registerUser(name);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors.name)}>
        <FormLabel htmlFor="name">名前</FormLabel>
        <Input
          {...register("name")}
          id="name"
          placeholder="名前を入力してください"
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        登録！
      </Button>
      <Text fontSize={"sm"} color={"tomato"}>
        ※登録データは突然消えることがあります。ご了承ください。
      </Text>
    </form>
  );
}
