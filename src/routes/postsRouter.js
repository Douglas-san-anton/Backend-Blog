import express from 'express';
import * as postController from '../controllers/postController.js';
import { ensureAuthenticated } from '../config/auth.js';

const router = express.Router();

// Obtener todas las publicaciones
router.get('/', postController.getAllPosts);

// Obtener una sola publicación por ID
router.get('/:id', postController.getPostById);

// Crear una nueva publicación (solo usuarios autenticados)
router.post('/', ensureAuthenticated, postController.createPost);

// Actualizar una publicación existente (solo usuarios autenticados)
router.put('/:id', ensureAuthenticated, postController.updatePost);

// Eliminar una publicación existente (solo usuarios autenticados)
router.delete('/:id', ensureAuthenticated, postController.deletePost);

export default router;
