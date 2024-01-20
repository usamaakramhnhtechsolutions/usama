import { BasedUrl } from "../config/https";

export const userData = async () => {
   try {
       const response = await BasedUrl.get('users');
       return response.data;
   } catch (error) {
       console.error("Error fetching user data:", error);
   }
};



