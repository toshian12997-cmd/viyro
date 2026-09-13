const request = async (url, options = {}) => {
  const res = await fetch(url, { headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }, ...options });
  if (res.status === 204) return null;
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Request failed.');
  return data;
};
export const api = {
  signup: body => request('/api/auth/signup', { method:'POST', body:JSON.stringify(body) }),
  login: body => request('/api/auth/login', { method:'POST', body:JSON.stringify(body) }),
  workspace: userId => request('/api/workspace', { headers:{'x-user-id':userId} }),
  create: (type, body, userId) => request(`/api/${type}`, { method:'POST', headers:{'x-user-id':userId}, body:JSON.stringify(body) }),
  remove: (type, id, userId) => request(`/api/${type}/${id}`, { method:'DELETE', headers:{'x-user-id':userId} }),
  readNotification: (id,userId) => request(`/api/notifications/${id}/read`, { method:'PATCH', headers:{'x-user-id':userId} }),
};
