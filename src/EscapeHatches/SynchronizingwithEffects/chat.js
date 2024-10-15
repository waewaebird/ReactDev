export function createConnection() {
    return {
        connect() {
            console.log('✅ 연결 중...');
        },
        disconnect() {
            console.log('❌ 연결이 끊겼습니다.');
        }
    }
}