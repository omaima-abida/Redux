import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactLoading from 'react-loading';
import { useSelector } from "react-redux"


const AfficheCategories = () => {
    const { categories, isLoading, error } = useSelector((state) => state.storecategories);
    const renderCategories = () => {
        if (isLoading) return <center><ReactLoading type='spokes' color="red"
            height={'8%'} width={'8%'} /></center>
        if (error) return <p>Impossible d'afficher la liste des catégories...</p>
        return <React.Fragment>
            {categories &&
                <div
                    style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "left" }}>
                    {categories.map((cat, ind) => {
                        return <Card sx={{ maxWidth: 'auto', margin: 1 }} key={ind}>
                            <CardMedia
                                component="img"
                                alt="image"
                                height="160"
                                image={cat.imageart}
                            />
                            <CardContent>s
                                <Typography gutterBottom variant="h6" component="div">
                                    {cat.reference}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Prix : {cat.prix} DT
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button disabled={cat.qtestock <= 1}
                                    variant="contained" color="secondary" size="large"

                                >
                                    {cat.qtestock <= 1 ? "OUT OF SOLD" : "Add to cart"}
                                </Button>
                            </CardActions>
                        </Card>
                    })}</div>
            }
        </React.Fragment>
    }
    return (
        <div className="container">
            {renderCategories()}
        </div>
    )
}
export default AfficheCategories