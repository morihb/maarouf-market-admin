import { useState } from 'react';
import { Plus, Edit, Trash2, Image, ToggleLeft, ToggleRight } from 'lucide-react';
import { sliders as initialSliders, Slider } from '@/data/mockData';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const SlidersList = () => {
  const [sliders, setSliders] = useState<Slider[]>(initialSliders);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSlider, setEditingSlider] = useState<Slider | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    image: '',
    active: true,
  });

  const handleDelete = (id: number) => {
    setSliders(sliders.filter(s => s.id !== id));
    toast({
      title: "Slider deleted",
      description: "The slider has been removed successfully.",
    });
  };

  const handleToggleActive = (id: number) => {
    setSliders(sliders.map(s =>
      s.id === id ? { ...s, active: !s.active } : s
    ));
  };

  const handleEdit = (slider: Slider) => {
    setEditingSlider(slider);
    setFormData({
      title: slider.title,
      description: slider.description,
      link: slider.link,
      image: slider.image,
      active: slider.active,
    });
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setEditingSlider(null);
    setFormData({
      title: '',
      description: '',
      link: '',
      image: '',
      active: true,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSlider) {
      setSliders(sliders.map(s =>
        s.id === editingSlider.id ? { ...s, ...formData } : s
      ));
      toast({
        title: "Slider updated",
        description: `${formData.title} has been updated successfully.`,
      });
    } else {
      const newSlider: Slider = {
        id: Math.max(...sliders.map(s => s.id)) + 1,
        ...formData,
        createdAt: new Date().toISOString().split('T')[0],
      };
      setSliders([...sliders, newSlider]);
      toast({
        title: "Slider created",
        description: `${formData.title} has been created successfully.`,
      });
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Sliders</h1>
          <p className="text-muted-foreground mt-1">Manage promotional banners and offers</p>
        </div>
        <button onClick={handleCreate} className="btn-primary flex items-center gap-2 w-fit">
          <Plus className="w-5 h-5" />
          Add Slider
        </button>
      </div>

      {/* Sliders Grid */}
      {sliders.length === 0 ? (
        <div className="admin-card py-12 text-center">
          <Image className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">No sliders found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sliders.map((slider) => (
            <div key={slider.id} className="admin-card overflow-hidden p-0">
              <div className="relative h-48">
                <img
                  src={slider.image}
                  alt={slider.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                  <h3 className="font-bold text-lg">{slider.title}</h3>
                  <p className="text-sm opacity-90 line-clamp-1">{slider.description}</p>
                </div>
                <div className={cn(
                  'absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold',
                  slider.active
                    ? 'bg-success text-success-foreground'
                    : 'bg-muted text-muted-foreground'
                )}>
                  {slider.active ? 'Active' : 'Inactive'}
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleActive(slider.id)}
                    className={cn(
                      'p-2 rounded-lg transition-colors',
                      slider.active
                        ? 'text-success hover:bg-success/10'
                        : 'text-muted-foreground hover:bg-muted'
                    )}
                    title={slider.active ? 'Deactivate' : 'Activate'}
                  >
                    {slider.active ? (
                      <ToggleRight className="w-5 h-5" />
                    ) : (
                      <ToggleLeft className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEdit(slider)}
                    className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(slider.id)}
                    className="p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative bg-card rounded-2xl shadow-elevated p-6 w-full max-w-lg animate-scaleIn max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-foreground mb-4">
              {editingSlider ? 'Edit Slider' : 'Create Slider'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter slider title"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Enter slider description"
                  rows={3}
                  className="input-field resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Image URL *
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Link URL
                </label>
                <input
                  type="text"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  placeholder="/products?category=sale"
                  className="input-field"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, active: !formData.active })}
                  className={cn(
                    'p-2 rounded-lg transition-colors',
                    formData.active
                      ? 'text-success bg-success/10'
                      : 'text-muted-foreground bg-muted'
                  )}
                >
                  {formData.active ? (
                    <ToggleRight className="w-5 h-5" />
                  ) : (
                    <ToggleLeft className="w-5 h-5" />
                  )}
                </button>
                <span className="text-sm text-muted-foreground">
                  {formData.active ? 'Active' : 'Inactive'}
                </span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button type="submit" className="btn-primary flex-1">
                  {editingSlider ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlidersList;
