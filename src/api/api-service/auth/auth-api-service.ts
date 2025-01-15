import { api } from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

export class AuthApiService {
  static async googleLogIn(): Promise<string> {
    const { data } = await api.get(ENDPOINTS.GOOGLE);
    return data.data;
  }
}
