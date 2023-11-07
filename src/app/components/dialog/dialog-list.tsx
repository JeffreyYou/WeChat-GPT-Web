import styles from "./dialog-list.module.scss";
import {DialogListItem} from "./dialog-list-item";
import {DialogResizeableSidebar} from "@/app/components/dialog/dialog-resizeable-sidebar";
import {useNavigate} from "react-router-dom";
import {userChatStore} from "@/app/store/chat-store";
import {DialogHead} from "@/app/components/dialog/dialog-head";


export function DialogList() {
    const navigate = useNavigate();
    const chatStore = userChatStore();
    const [sessions, currentSessionIndex, selectSession] = userChatStore(
        (state) => [
            state.sessions,
            state.currentSessionIndex,
            state.selectSession]);

    return (
        // DialogResizeableSidebar change dialog size
        <DialogResizeableSidebar>
            {/* Dialog Search and Add */}
            <DialogHead/>
            {/* Dialog List*/}
            <div className={styles["dialog-list"]}>
                {sessions.map((session, index) => (
                    <DialogListItem
                        key={session.id}
                        session={session}
                        selected={currentSessionIndex === index}
                        onClick={() => {
                            selectSession(index);
                            navigate(`/chat/${session.id}`, {state: {title: session.dialog.title}})
                        }}
                        onClickDelete={() => {
                            chatStore.deleteSession(index);
                        }}
                    />
                ))}
            </div>
        </DialogResizeableSidebar>
    );

}