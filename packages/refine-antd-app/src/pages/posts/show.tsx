import { Show, Tag, Typography } from "@pankod/refine-antd";
import { useOne, useShow } from "@pankod/refine-core";
import { ICategory } from "./interfaces";

export const PostShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: categoryData } = useOne<ICategory>({
    resource: "categories",
    id: record?.category.id || "",
    queryOptions: {
      enabled: !!record?.category.id,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Typography.Title level={5}>Title</Typography.Title>
      <Typography.Text>{record?.title}</Typography.Text>

      <Typography.Title level={5}>Status</Typography.Title>
      <Typography.Text>
        <Tag>{record?.status}</Tag>
      </Typography.Text>

      <Typography.Title level={5}>Category</Typography.Title>
      <Typography.Text>{categoryData?.data.title}</Typography.Text>
    </Show>
  );
};
