import {createContext, useContext} from "react";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        setFavoriteUser: (obj: IUserModel) => void
    },
    postStore: {
        allPosts: IPostModel[],
        setFavoritePost: (obj: IPostModel) => void
    },
    commentStore: {
        allComments: ICommentModel[]
    }
};

export const defaultValue: StoreType = {
    userStore: {
        allUsers: [],
        setFavoriteUser: () => {}
    },
    postStore: {
        allPosts: [],
        setFavoritePost: () => {}
    },
    commentStore: {
        allComments: []
    }
};

export const Context = createContext<StoreType>(defaultValue);

export const useContextProvider = (): StoreType => useContext(Context);
