import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { motion } from 'framer-motion'
import { useState } from 'react';





export default function User({ user, handleSelectedUser, }) {

    return (
        <div >
            <motion.li
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 1 }}
            >
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            id="hhhh"
                            height="20"
                            image={user.image}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div">
                                {/* {user.gender === "male" ? "Mr. " : "Ms. "} */}
                                {user.firstName} {user.lastName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                age: {user.age}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <motion.button
                            whileTap={{ scale: 0.90 }}
                        >
                            <Button onClick={() => handleSelectedUser(user)} size="small" color="primary">
                                Change
                            </Button>
                        </motion.button>
                    </CardActions>
                </Card>
            </motion.li>

        </div >
    )
}
