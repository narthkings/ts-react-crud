import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Container, Button } from "reactstrap";
import { getUsers, deleteSingleUser } from "../../actions/CrudActions";
import { AllUsersFromDb } from "../../types/types";
import toast from "../../helpers/toast";

const ListUsers = () => {
    const [user, setUser] = useState<AllUsersFromDb | null>(null);
    useEffect(() => {
        const fetchUsers = async () => {
            const getAllUsers = await getUsers();
            setUser(getAllUsers);
        };
        fetchUsers();
    }, []);

    const handleDelete = (id: string) => {
        deleteSingleUser(id)
            .then(() => {
                toast.success("deleting user...");
                window.location.reload();
            })
            .catch((err) => {
                throw new Error(err);
            });
    };

    return (
        <Container>
            <Table className="mt-5" responsive={true} striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Cell Number</th>
                        <th>Country</th>
                        <th>State</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {!user && (
                        <tr>
                            <td colSpan={12}>
                                <div className="spinner-border mx-auto d-flex" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </td>
                        </tr>
                    )}
                    {user &&
                        user.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.country}</td>
                                    <td>{user.state}</td>
                                    <td>
                                        <div className="d-flex justify-content-around">
                                            <Link to={`/all-users/${user.id}`}>
                                                <Button outline={true} color="success">
                                                    Edit
                                                </Button>
                                            </Link>
                                            <Button
                                                onClick={() => handleDelete(user.id)}
                                                color="danger"
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
        </Container>
    );
};

export { ListUsers };
