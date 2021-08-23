import axiosInstance from '../../../utils/axios';

class ChatApiService {
    getConversations() {
        return axiosInstance.get('/api/chat/conversations');
    }

    getConversation(conversationKey: string) {
        return axiosInstance.get('/api/chat/conversation', {
            params: { conversationKey }
        });
    }

    getContacts() {
        return axiosInstance.get('/api/chat/contacts');
    }

    getParticipants(conversationKey: string) {
        return axiosInstance.get('/api/chat/participants', {
            params: { conversationKey }
        });
    }

    markConversationAsRead(conversationId: string) {
        return axiosInstance.get('/api/chat/conversation/mark-as-seen', {
            params: { conversationId }
        });
    }
    searchContacts(query: string) {
        return axiosInstance.get('/api/chat/conversations/search', {
            params: { query: query }
        });
    }
}

export default new ChatApiService();