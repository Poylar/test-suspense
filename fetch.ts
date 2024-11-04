export const fetchWithDelay = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve({ message: 'Данные успешно загружены после 10 секунд' })
		}, 5000) // 10000 миллисекунд = 10 секунд
	})
}
