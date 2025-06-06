const login = require('../controllers/login/login');
const usaurios = require('../controllers/user/registrarUsuario');
const permisos = require('../controllers/permisos/permisos')
// role
const Role = require('../controllers/roles/roles')
// eslint-disable-next-line no-unused-vars

const express = require('express');
// eslint-disable-next-line new-cap
const router =express.Router();
// role
router.post('/roleC',Role.roleCreate)
router.get('/role',Role.getRoles)
// login
router.post('/login', login.login);
// Usuarios
router.post("/usuario", usaurios.createUser);
// Permisos
router.post("/permisos", permisos.permiso)
router.get("/permisos", permisos.getPermisos)
router.get("/permisosN", permisos.getPermisoByName)
// roles
router.post("/roles", Role.roleCreate)
router.get("/roles", Role.getRoles)

module.exports=router;