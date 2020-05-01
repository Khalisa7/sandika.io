import { ADD_ARTICLE } from "@src/redux/constants/action-types"

export function addArticle(payload) {
    return { 
        type: ADD_ARTICLE, 
        payload 
    }
}