import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {create} from "zustand";

type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        loadUsers: (users: IUserModel[]) => void,
        favoriteUser: IUserModel | null,
        setFavoriteUser: (obj: IUserModel) => void
    },
    postStore: {
        allPosts: IPostModel[],
        loadPosts: (posts: IPostModel[]) => void,
        favoritePost: IPostModel | null,
        setFavoritePost: (obj: IPostModel) => void
    },
    commentStore: {
        allComments: ICommentModel[],
        loadComments: (comments: ICommentModel[]) => void
    }
};

export const defaultValue: StoreType = {
    userStore: {
        allUsers: [],
        loadUsers: (users: IUserModel[]) => {
        },
        favoriteUser: null,
        setFavoriteUser: (user: IUserModel) => {
        }
    },
    postStore: {
        allPosts: [],
        loadPosts: (posts: IPostModel[]) => {
        },
        favoritePost: null,
        setFavoritePost: (post: IPostModel) => {
        }
    },
    commentStore: {
        allComments: [],
        loadComments: (comments: ICommentModel[]) => {
        }
    }
};

export const useStore = create<StoreType>()((set): StoreType => {
    return {
        ...defaultValue,
        userStore: {
            ...defaultValue.userStore,
            loadUsers: (users: IUserModel[]) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        userStore: {
                            ...state.userStore,
                            allUsers: users
                        }
                    }
                })
            },
            setFavoriteUser: (user: IUserModel) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        userStore: {
                            ...state.userStore,
                            favoriteUser: user
                        }
                    }
                })
            }
        },
        postStore: {
            ...defaultValue.postStore,
            loadPosts: (posts: IPostModel[]) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        postStore: {
                            ...state.postStore,
                            allPosts: posts
                        }
                    }
                })
            },
            setFavoritePost: (post: IPostModel) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        postStore: {
                            ...state.postStore,
                            favoritePost: post
                        }
                    }
                })
            }
        },
        commentStore: {
            ...defaultValue.commentStore,
            loadComments: (comments: ICommentModel[]) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        commentStore: {
                            ...state.commentStore,
                            allComments: comments
                        }
                    }
                })
            }
        }
    }
});
