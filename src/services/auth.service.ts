import {TokenObtainPair} from "../interfaces/TokenObtainPair";
import {IResponce} from "../types/responceType";
import {IUserModel} from "../interfaces/IUserModel";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";
import {ITokenModel} from "../interfaces/ITokenModel";


const _accessTokenKey = 'access'
const _refreshTokenKey = 'refresh'

const authService = {
    register(user: TokenObtainPair): IResponce<IUserModel>{
        return apiService.post(urls.auth.register, user)
    },
    async login(user:TokenObtainPair): Promise<IUserModel>{
        const {data} = await apiService.post<ITokenModel>(urls.auth.login, user);
        this.setTokens(data);
        const {data:me} = await this.me();
        return me;
    },
    async refresh():Promise<void>{
      const refreshToken = this.getRefreshToken();
      const {data} = await apiService.post(urls.auth.refresh, {refresh: refreshToken});
      this.setTokens(data);
    },
    me(): IResponce<IUserModel> {
            return apiService.get(urls.auth.me);
    },
    setTokens({refresh, access}: ITokenModel):void{
        localStorage.setItem(_accessTokenKey, access);
        localStorage.setItem(_refreshTokenKey, refresh);
    },
    getAccessToken():string{
        return localStorage.getItem(_accessTokenKey);
    },
    getRefreshToken():string{
        return localStorage.getItem(_refreshTokenKey);
    },
    removeTokens():void{
        localStorage.removeItem(_accessTokenKey);
        localStorage.removeItem(_refreshTokenKey);
    }
};

export {
    authService
}