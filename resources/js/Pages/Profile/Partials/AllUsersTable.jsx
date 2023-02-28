import Card from "@/Components/Admin/Card";
import { useState, useMemo } from "react";
import DataTable, { createTheme } from "react-data-table-component";

export default function AllUsersTable({data}){
    createTheme(
    	'solarized',
    	{
    		text: {
                primary: '#ffffff',
                secondary: '#2aa198',
            },
            background: {
                default: '#192030',
            },
            context: {
                background: '#cb4b16',
                text: '#FFFFFF',
            },
            divider: {
                default: '#ffffff',
            },
            button: {
                default: '#2aa198',
                hover: 'rgba(0,0,0,.08)',
                focus: 'rgba(255,255,255,.12)',
                disabled: 'rgba(255, 255, 255, .34)',
            },
            sortFocus: {
                default: '#2aa198',
            },
        },
        'dark',
    );
    const columns = [
        {
            name: 'Nama',
            selector: row => row.name
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'Role',
            selector: row => (row.level == 2) ? "Instructor" : ""
        }
    ];
    const [filterText, setFilterText] = useState('');
	const filteredItems = data.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = useMemo(() => {
		return (
			<input
                className="form-control"
                id="search"
                type="text"
                placeholder="Filter By Name"
                aria-label="Search Input"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />
		);
	}, [filterText]);

    return (
        <div className="col-xs-12">
            <Card title="Daftar User">
                <DataTable
                    columns={columns}
                    theme="solarized"
                    data={filteredItems}
        			pagination
        			subHeader
        			subHeaderComponent={subHeaderComponentMemo}
                />
            </Card>
        </div>
    );
}