export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
      <form className="space-y-4">
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
          Entrar
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        ¿No tienes cuenta?{" "}
        <a href="/auth/register" className="text-blue-600 hover:underline">
          Regístrate aquí
        </a>
      </p>
    </div>
  );
}
