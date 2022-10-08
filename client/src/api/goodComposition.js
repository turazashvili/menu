import { useCallback } from "react";
import useParamsApi from "./useParamsAPI";
import { isFunc } from "@utils";

const urlBase = "/api/goodComposition";

const useGetById = (props = {}) => {
  const { get, loading, response } = useParamsApi(urlBase);
  return [
    useCallback(
      (id, setData) => {
        get(`?id=${id}`).then((data) => {
          if (response.ok) {
            setData(data ? { ...data, goodId: data.good } : {});
          }
        });
      },
      [response, get]
    ),
    loading,
  ];
};

const useUpdate = () => {
  const { put, loading, response } = useParamsApi(urlBase);
  return [
    useCallback(
      (data) => {
        put("", data);
      },
      [response, put]
    ),
    loading,
  ];
};

const usePost = () => {
  const { post, loading, response } = useParamsApi(urlBase);
  return [
    useCallback(
      (data) => {
        post("", data);
      },
      [response, post]
    ),
    loading,
  ];
};

const useDelete = (props = {}) => {
  const { reload } = props;
  const { del, loading, response } = useParamsApi(urlBase);
  return [
    useCallback(
      (value) => {
        del("", value).then((data) => {
          isFunc(reload);
        });
      },
      [response, del, reload]
    ),
    loading,
  ];
};

export { useGetById, useUpdate, useDelete, usePost };
