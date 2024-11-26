// Object Pool
class ObjectPool {
    constructor() {
      this.objects = [];
      this.available = [];
    }
  
    initialize() {
      // Create and add objects to the pool
      for (let i = 0; i < 5; i++) {
        const object = { id: i }; // Replace with your actual object creation logic
        this.objects.push(object);
        this.available.push(object);
      }
    }
  
    acquire() {
      if (this.available.length === 0) {
        console.log('No objects available. Creating a new one.');
        const object = { id: this.objects.length }; // Replace with your actual object creation logic
        this.objects.push(object);
        return object;
      } else {
        return this.available.pop();
      }
    }
  
    release(object) {
      this.available.push(object);
    }
  }
  
  // Usage
  const pool = new ObjectPool();
  pool.initialize();
  
  const obj1 = pool.acquire();
  console.log(obj1); // Output: { id: 0 }
  
  const obj2 = pool.acquire();
  console.log(obj2); // Output: { id: 1 }
  
  pool.release(obj1);
  
  const obj3 = pool.acquire();
  console.log(obj3); // Output: { id: 0 } (reused the released object)
  
  const obj4 = pool.acquire();
  console.log(obj4); // Output: { id: 2 } (created a new object)
  
  pool.release(obj2);
  pool.release(obj3);
  pool.release(obj4);
  