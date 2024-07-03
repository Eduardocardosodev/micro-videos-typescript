import { Uuid } from '../../../shared/domain/value-objects/uuid.vo';
import { Category } from '../entities/category.entity';

describe('Category Unit Test', () => {
  it('should create a category', () => {
    const category = new Category({
      name: 'Movie',
    });

    expect(category.category_id).toBeInstanceOf(Uuid);
    expect(category.name).toBe('Movie');
  });
  it('should change a category name', () => {
    const category = new Category({
      name: 'Movie',
    });

    category.changeName('Movie update');

    expect(category.category_id).toBeInstanceOf(Uuid);
    expect(category.name).toBe('Movie update');
  });
  it('should change a category description', () => {
    const category = new Category({
      name: 'Movie',
      description: 'Description movie',
    });
    category.changeDescription('Description movie update');

    expect(category.category_id).toBeInstanceOf(Uuid);
    expect(category.description).toBe('Description movie update');
  });

  it('should active a category', () => {
    const category = Category.create({
      name: 'Movie',
      description: 'Description movie',
    });

    category.activate();
    expect(category.is_active).toBeTruthy();
  });

  it('should deactive a category', () => {
    const category = Category.create({
      name: 'Movie',
      description: 'Description movie',
    });

    category.deactive();
    expect(category.is_active).toBe(false);
  });
});
