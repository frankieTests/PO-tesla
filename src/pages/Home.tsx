import { useState, useEffect } from "react";
import FileListWrapper from "../components/lists/FileListWrapper.tsx";
import useDriveQuery from "../hooks/useDriveQuery.tsx";
import { BaseRequest } from "../apis/type";
import CarService from "../apis/carListService";
import { SHA256 } from "crypto-js";
import { useSearchStateContext } from "../context/SearchStateContext.tsx";
import storage from "../utils/localstorage.ts";
import usePagenation from "../hooks/usePagenation.tsx";
import { MODE, VITE_APP_LOGIN_EMAIL, VITE_APP_LOGIN_PASSWORD } from "../__mocks__/constants.ts";

const Home = () => {
  const [page, setPage] = useState(1);
  const { keyword } = useSearchStateContext();
  const { getDriveList } = useDriveQuery();
  const { ref, postPerPage, totalPage } = usePagenation();
  const [driveRequestData, setDriveRequestData] = useState<BaseRequest>({
    page: page,
    path: "PATH://drive/",
    fileStatus: "NORMAL",
    count: postPerPage,
    sort: "TIME",
    desc: true,
    keyword: keyword
  });

  if (MODE === "development") {
    useEffect(() => {
      const login = async () => {
        const car = new CarService();
        const password = VITE_APP_LOGIN_PASSWORD;
        const hash = SHA256(password).toString();

        const res = await car.Login({
          autoLogin: true,
          email: VITE_APP_LOGIN_EMAIL,
          password: hash
        });
        console.log(res);
      };
      login();
    }, []);
  }

  useEffect(() => {
    setDriveRequestData({
      ...driveRequestData,
      page,
      keyword,
      count: postPerPage
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, keyword, postPerPage]);

  const { isLoading, data, isSuccess } = getDriveList(driveRequestData);

  if (isSuccess) {
    storage.set("page", data.totalCount);
  }

  return (
    <FileListWrapper
      setDriveRequestData={setDriveRequestData}
      driveRequestData={driveRequestData}
      page={page}
      setPage={setPage}
      ref={ref}
      totalPage={totalPage}
      isLoading={isLoading}
      datas={data?.list || []}
    />
  );
};

export default Home;
