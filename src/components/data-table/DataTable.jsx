import DataTable from "react-data-table-component";

import "./style.scss";

const Table = ({ title, columns, data, ...rest }) => {
	return (
		<>
			<DataTable
				title={title}
				columns={columns}
				data={data}
				pagination
				persistTableHead
				defaultSortAsc
				highlightOnHover
				paginationComponentOptions={{ noRowsPerPage: true }}
				{...rest}
			/>
		</>
	);
};

export default Table;
