import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const forbidden = ['fuck', 'spam', 'php', 'bitch'];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
    return (next) => {
        return (action) => {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(w => action.payload.title.includes(w));

                if (found.length) {
                    return dispatch( showAlert('Ви вжили заборонене слово!'));
                }
            }
            return next(action)
        }
    }
};