import { UseQueryResult } from '@tanstack/react-query';
// import { ChangeEvent, MouseEvent } from "react";

export type ExampleType = {}

export type ExamplePostType = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type ExamplePostPropType {
  post: ExamplePostType
}

export type ExampleQueryType = UseQueryResult<ExamplePostType[], Error>

export type ExampleProviderType = {
  query?: ExampleQueryType
}
