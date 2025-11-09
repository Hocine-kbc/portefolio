export const getStatusConfig = (status = '') => {
  if (!status) {
    return { label: 'En cours', color: '#6366f1' };
  }

  const label = status.toString().trim();
  const lower = label.toLowerCase();
  const sanitized = lower.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  if (
    sanitized.includes('termine') ||
    sanitized.includes('actif') ||
    sanitized.includes('deploye') ||
    sanitized.includes('livre')
  ) {
    return { label, color: '#10b981' };
  }

  if (
    sanitized.includes('developpement') ||
    sanitized.includes('en cours') ||
    sanitized.includes('progress')
  ) {
    return { label, color: '#f59e0b' };
  }

  if (
    sanitized.includes('planifie') ||
    sanitized.includes('avenir') ||
    sanitized.includes('prototype') ||
    sanitized.includes('design')
  ) {
    return { label, color: '#3b82f6' };
  }

  return { label, color: '#6366f1' };
};

