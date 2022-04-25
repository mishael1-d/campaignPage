import React from "react";
import { Alert } from 'antd';
import 'antd/dist/antd.min.css'
function Warnings({message}) {
  return (
    <Alert message={message} type="error" showIcon closable={true} />
  );
}

export default Warnings;
