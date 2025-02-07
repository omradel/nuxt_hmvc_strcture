// Helper to handle API calls in this module with loading and error management
export const useApi = () => {
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const handleApiCall = async <T>(
    callback: () => Promise<T>
  ): Promise<T | null> => {
    isLoading.value = true;
    error.value = null;

    try {
      return await callback();
    } catch (err: any) {
      error.value = err.response?.data?.message || "An error occurred";
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    handleApiCall,
    isLoading,
    error,
  };
};
