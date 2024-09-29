function ProduitRow({product})
{

    const style = product.stocked ? {color:'green'} : {color: 'red'}
    return <tr>
        <td  style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}

export default ProduitRow