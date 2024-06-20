import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../features/dummyData';
import { MdDeleteOutline } from "react-icons/md";
import "../css/RiceList.scss";


const RiceList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "process",
      headerName: "Production Stage",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.name}
          </div>
        );
      },
    },
    { field: "quantity", headerName: "Qty", width: 200 },
    {
      field: "confirmedBy",
      headerName: "Confirmed By",
      width: 120,
    },
    {
      field: "createdBy",
      headerName: "Submitted By",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/rice/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <MdDeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

export default RiceList;