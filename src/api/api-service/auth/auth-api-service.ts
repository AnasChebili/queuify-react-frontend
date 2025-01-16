import { api } from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";
import { UserRequestSchema } from "@/schemas/auth-schema";

export class AuthApiService {
  static async googleLogIn(): Promise<string> {
    const { data } = await api.get(ENDPOINTS.GOOGLE);
    return data.data;
  }

  static async logIn({
    credentials,
  }: {
    credentials: Zod.infer<typeof UserRequestSchema>;
  }): Promise<string> {
    const { data } = await api.post(`${ENDPOINTS.LOGIN}`, credentials);
    return data.data;
  }
}
