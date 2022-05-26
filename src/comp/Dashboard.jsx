/* This example requires Tailwind CSS v2.0+ */
import User from "./User"
import { Container, Grid, Paper, Button, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function Dashboard({ users, handleSelectedUser, selectedUser }) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: "flex"

    }));

    return (
        <div className="introPageContainer">
            <header className="bg-white shadow sticky top-0 w-screen z-40">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
            </header>
            <main >
                <div className=" max-w-7xl mx-auto py-6 sm:px-6 lg:px-8  ">
                    <Container maxWidth="fluid" >
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {users.map(user =>
                                <Grid item xs={6} lg={3}>

                                    <Item display="flex">
                                        {user === selectedUser ?
                                            <Badge badgeContent={"selected"} color="primary">
                                            </Badge> : null
                                        }
                                        <User user={user} handleSelectedUser={handleSelectedUser} />
                                    </Item>
                                </Grid>)}
                        </Grid>
                    </Container>
                </div>
            </main>
        </div >

    )
}

