import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Curse from "../components/admins/Curse";
import FormCurse from "../components/admins/forms/FormCurse";
import FormValute from "../components/admins/forms/FormValute";
import TransactionsAdmin from "../components/admins/TransactionsAdmin";

import ValuteList from "../components/admins/ValuteList";
const Admin = () => {
  const [refresh, setRefresh] = useState(false);
  const { baseUrl, token } = useSelector((state) => state.auth);

  useEffect(() => {}, [refresh]);

  return (
    <div>
      <p className="h1_admin">Транзакции:</p>
      <TransactionsAdmin refresh={refresh} token={token} />
      <p className="h1_admin">Добавить валюту</p>
      <FormValute
        refresh={refresh}
        setRefresh={setRefresh}
        baseUrl={baseUrl}
        token={token}
      />
      <p className="h1_admin">Валюта</p>
      <ValuteList
        baseUrl={baseUrl}
        token={token}
        setRefresh={setRefresh}
        refresh={refresh}
      />
      <p className="h1_admin">Добавить Курс</p>
      <FormCurse
        refresh={refresh}
        setRefresh={setRefresh}
        baseUrl={baseUrl}
        token={token}
      />
      <p className="h1_admin">Курсы</p>
      <Curse setRefresh={setRefresh} token={token} refresh={refresh} />
    </div>
  );
};

export default Admin;
