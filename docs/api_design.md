# Api design

## `POST /find`
req - send image
res 
```
{
  productId: number, 
  productName: string,
  icon?: string,
}
```

## `GET /products`
res
```
{
  productId: number, 
  productName: string,
} [] ...
```

## `GET /products/:id`
res
```
{
  productName: string,
  pasticType: string, 
  weight: number,
  lifeSpan: number,
  recyclable: boolean,
  alternativeProduct: string [],
  recommendations: string []
}
```

## `GET /users/:id`
res
```
{
  userName: string,
  dailyGoal: number
  consumption: { productId: number, productName: string, weight: number } []
}
```

## `POST /users/:id`
req
```
{
  productId: number
}
```