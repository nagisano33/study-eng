import { z } from "zod";

/**
 * 登録フォームのスキーマ
 *
 * @author nagisano33
 */
export const registrationFormSchema = z
  .object({
    name: z.string().min(1, "必須入力です"),
  })
  .required({ name: true });

/**
 * 登録フォームスキーマの型定義
 *
 * @author nagisano33
 */
export type TRegistrationFormSchema = z.infer<typeof registrationFormSchema>;
