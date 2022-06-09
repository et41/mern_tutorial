import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) =>  {
<<<<<<< HEAD
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.position}</td>
   <td>{props.record.level}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
=======
    return(
    <tr>
      <td>{props.record.name}</td>
      <td>{props.record.position}</td>
      <td>{props.record.level}</td>
      <td>
        <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link>*
        <button className="btn btn-link"
          onClick={() => {
            props.deleteRecord(props.record._id);
          }}
        >
          Delete
          </button>
      </td>
    </tr>
    )
>>>>>>> a143951f2ab50a81c91b8c35dfc3345e6fde1c1a
};

export default function RecordList() {
    console.log("in record list");
    const [records, setRecords] = useState([]);
    console.log("records:", records);
    //fetch records from db
    useEffect(() => {
        console.log("IN USE EFFECT");
        async function getRecords() {
            const response = await fetch(`http://localhost:5000/record/`);

            if(!response.ok) {
                const message = ` Error occured: ${response.statusText}`;
                console.log(message);
                window.alert(message);
                return;
            }

            const records = await response.json();
<<<<<<< HEAD
            console.log("records after response", records);
=======

			      console.log("response", records);
>>>>>>> a143951f2ab50a81c91b8c35dfc3345e6fde1c1a

            setRecords(records);
        }
        getRecords();
        return;
    }, [records.length]);

    //delete record
    async function deleteRecord(id) {
        await fetch(`http://localhost:5000/${id}`, {
            method: "DELETE"
        });

        const newRecords = records.filter((el) => el.id !== id);
        setRecords(newRecords);
    }
    /*let rec = []
    records.map((record) => {
          console.log("record", record)
            return (
              rec.push(
                <Record
                record={record}
                deleteRecord={() => deleteRecord(record._id)}
                key={record._id}
              />)
            );
        });*/

    function recordList() {
      console.log("in recordList");
        return records.map((record) => {
          console.log("record", record)
            return (
                <Record
                record={record}
                deleteRecord={() => deleteRecord(record._id)}
                key={record._id}
                />
            );
        });
    }

    return (
        <div>
        <h3>Record List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{recordList()}</tbody>
        </table>
      </div>
    )
}
