Begin;

drop table if exists product cascade;

create table product(
  product_id int,
  product_name varchar(50),
  image_url varchar(100),
  plastic_type varchar(50),
  amount_of_plastic int,
  time_to_decay int,
  recyclable boolean,
  alternative_product varchar(100),
  recommendation_1 varchar(100),
  recommendation_2 varchar(100)
);

insert into product (product_id, product_name, image_url, plastic_type, amount_of_plastic, time_to_decay, recyclable, alternative _product, recommendation_1, recommendation_2)
values ('1','Plastic bottles','https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/pet_bottle.png','polyethylene terephthalate (PET)','20','10','yes','https://images-na.ssl-images-amazon.com/images/I/51R1ZSE40KL._SY355_.jpg','Consider using a stainless steel bottle','Replace your plastic bottle with a glass bottle'),
('2','Plastic cups','https://kwmedia.scdn8.secure.raxcdn.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/176259-icon-red-cup-18oz-b1_1.jpg','Polyethylene','10','10','yes','https://metrouk2.files.wordpress.com/2018/01/keepcup-e1515596761768.jpg?w=620&h=373&crop=1','Take a reusable coffee cup','Paper cups are a great alternative'),
('3','Straws','https://as2.ftcdn.net/jpg/01/17/10/95/500_F_117109574_LSh5LmL0tOqqW9isdNPZmATVhwzfzJjB.jpg','Polyamides','2','10','no','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTeezPfG7ftUmf4q-oTLaNDs0Q5GuhTx7z1apNjjDTVgHmZXWx','Recyclable Straws make a great alternative','Compostable straws are a great alternative'),
('4','Plastic silverware','https://i5.walmartimages.com/asr/5cee23cf-930d-468a-8ddf-818713f4fce9_1.f133d536bd565a895efffd0d6920f558.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF','Polystyrene','10','20','yes','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9aZSl59PUIc3v0XzCRsjyGHJksKUYMNBTw6GcCvzmtAfE3e_','Use wooden silverware instead','Compostable Disposable Fork'),
('5','Plastic plates','https://www.wfdenny.co.uk/media/img/products/500/bulk-pack-7-white-plastic-plates.59296f24af0fb.jpg','Thermoplastic elastomers','15','20','no','https://target.scene7.com/is/image/Target/GUEST_39e5c9d8-b130-46e7-a49f-b90c1cabe5f4?wid=488&hei=488&fmt=pjpeg','Use Paper Plates instead','Consider using displosable plates'),
('6','Plastic grocery bags','https://img.clipartxtras.com/b20f4b34889a9b9dc4ed6155d50be6c0_plastic-bag-clipart-black-and-white-clipartxtras-grocery-bag-clipart-png_552-768.png','Poly methyl methacrylate','40','20','yes','https://rlv.zcache.com/we_bare_bears_fanart_tote_life_tote_bag_cheap-r6da9aaf99c6a4d9292339134f0ebbfa6_v9w6h_8byvr_540.jpg','Invest in a tote bag','Use paper bags instead');

drop table if exists consumption cascade;

create table consumption(
  user_id int,
  datetime int,
  product_id int
);

insert into consumption (user_id, datetime, product_id)
values ('111','43390.6300179398','1')
('111','43391.6300231482','3')
('111','43392.6300231482','5')
('112','43393.6300231482','2')
('112','43394.6300231482','4')
('112','43395.6300231482','6')
('112','43396.6300231482','1')
('113','43397.6300231482','4');

drop table if exists users cascade;

create table users(
  id int,
  name varchar(50),
  daily_goal int
);

insert into users (id, name, daily_goal)
values ('111','Olivia Garcia','50')
('112','Lulu Jojes','100')
('113','Helena Murret','80');