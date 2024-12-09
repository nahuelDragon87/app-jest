// Información del propietario del repositorio
export interface Owner {
    login: string; // Nombre del usuario propietario
    id: number; // ID único del propietario
    avatar_url: string; // URL del avatar del propietario
    html_url: string; // URL del perfil del propietario
  }
  
  // Información de cada repositorio
  export interface Repository {
    id: number; // ID único del repositorio
    name: string; // Nombre del repositorio
    full_name: string; // Nombre completo (incluye el usuario/organización)
    html_url: string; // URL del repositorio
    description: string | null; // Descripción del repositorio
    stargazers_count: number; // Número de estrellas
    owner: Owner; // Información del propietario
  }
  
  // Respuesta de la API de búsqueda
  export interface SearchRepositoriesResponse {
    total_count: number; // Número total de resultados
    incomplete_results: boolean; // Indica si los resultados están incompletos
    items: Repository[]; // Lista de repositorios encontrados
  }
  