export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Crear Cuenta</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2 mt-1"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg p-2 mt-1"
            placeholder="tu@email.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Contraseña</label>
          <input
            type="password"
            className="w-full border rounded-lg p-2 mt-1"
            placeholder="********"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800"
        >
          Registrarme
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        ¿Ya tienes cuenta?{" "}
        <a href="/auth/login" className="text-blue-600 hover:underline">
          Inicia sesión aquí
        </a>
      </p>
    </div>
  );
}
