import {MessageRole} from "@/types/chat";
import {GptVersion} from "@/app/constants";

const host = 'https://console-mock.apipost.cn/mock/072fa474-ab36-4650-a798-a57e8223e6e6'

export const getRoleList = () => {
    // 从 apiPost mock 接口获取
    // return fetch(`${host}/role/list`).then((res) =>
    //     res.json()
    // );

    return fetch(`/prompts.json`).then((res) =>
        res.json()
    );
}

export const completions = (data: {
    messages: { content: string; role: MessageRole }[],
    model: GptVersion
}) => {
    return fetch('http://localhost:8090/api/v1/chat/completions', {
        method: 'post',
        headers: {
            Authorization: "b8b6",
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
}

