create database yadmandul_store;
use yadmandul_store;

create table administradores(
	id_admin int primary key auto_increment,
    nom_admin varchar(30) not null,
    ap_pat_admin varchar(30) not null,
    ap_mat_admin varchar(30) not null,
    fec_nac_admin date not null,
    correo_admin varchar(20) not null,
    password_admin varchar(20) not null
);

create table clientes(
	id_cli int primary key auto_increment,
    nom_cli varchar(30) not null,
    ap_pat_cli varchar(30) not null,
    ap_mat_cli varchar(30) not null,
    fecha_nac_cli date not null,
    correo_cli varchar(30) not null,
    password_cli varchar(20) not null,
    estado_cli boolean not null
);

create table empleados(
	id_emp int primary key auto_increment,
    nom_emp varchar(30) not null,
    ap_pat_emp varchar(30) not null,
    ap_mat_emp varchar(30) not null,
    fec_nac_emp date not null,
    correo_emp varchar(30),
    password_emp varchar(20) not null,
    estado_emp boolean not null
);

create table proveedores(
	id_prov int primary key auto_increment,
    nom_prov varchar(30) not null,
    ap_pat_prov varchar(30) not null,
    ap_mat_prov varchar(30) not null,
    correo_prov varchar(30) not null,
    tel_prov varchar(10) not null
);

create table productos(
	id_prod int primary key auto_increment,
    nom_prod varchar(30) not null,
    tipo_prod varchar(15) not null,
    precio_prod double not null,
    cantidad_prod int not null,
    estado_prod boolean not null,
    id_prov int not null,
    foreign key (id_prov) references proveedores(id_prov)
);

create table ventas(
	id_venta int primary key auto_increment,
    id_emp int not null,
    id_cli int not null,
    fec_venta date not null,
    hor_venta time not null,
    total_venta double not null,
    foreign key (id_emp) references empleados(id_emp),
    foreign key (id_cli) references clientes(id_cli)
);

create table detalle_venta(
	id_venta int not null,
    id_prod int not null,
    cantidad int not null,
    importe double not null,
    foreign key (id_venta) references ventas(id_venta),
    foreign key (id_prod) references productos(id_prod)
);

create table carrito(
	id_cli int not null,
    id_prod int not null,
    cantidad int not null,
    total double not null,
    foreign key (id_cli) references clientes(id_cli),
    foreign key (id_prod) references productos(id_prod)
);

create table pedidos(
	id_pedido int primary key auto_increment,
    id_cli int not null,
    fec_pedido date not null,
    hor_pedido time not null,
    total double not null,
    pendiente boolean not null,
    cancelado boolean not null
);

create table detalle_pedidos(
	id_pedido int not null,
    id_prod int not null,
    cantidad int not null,
    importe double not null,
    detalles varchar(50) not null,
    foreign key (id_pedido) references pedidos(id_pedido),
    foreign key (id_prod) references productos(id_prod)
);

create table estado_pedidos(
	id_pedido int not null,
    id_emp int not null,
    estado varchar(15) not null,
    foreign key (id_pedido) references pedidos(id_pedido),
    foreign key (id_emp) references empleados(id_emp)
);
