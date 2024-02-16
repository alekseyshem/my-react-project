import dayjs from "dayjs";

type Post = {
    title: string;
    description: string;
    id: number;
    createdAt: dayjs.Dayjs;
    updatedAt: dayjs.Dayjs;
}

export default Post;