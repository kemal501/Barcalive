// Todo List App - Local Storage Implementation

class TodoApp {
    constructor() {
        this.todos = this.loadFromStorage();
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.render();
    }

    setupEventListeners() {
        document.getElementById('addBtn').addEventListener('click', () => this.addTodo());
        document.getElementById('todoInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.render();
            });
        });

        document.getElementById('clearCompleted').addEventListener('click', () => this.clearCompleted());
        document.getElementById('exportBtn').addEventListener('click', () => this.exportTodos());
        document.getElementById('importBtn').addEventListener('click', () => {
            document.getElementById('fileInput').click();
        });
        document.getElementById('fileInput').addEventListener('change', (e) => this.importTodos(e));
        document.getElementById('resetAllBtn').addEventListener('click', () => this.resetAll());
    }

    addTodo() {
        const input = document.getElementById('todoInput');
        const priority = document.getElementById('prioritySelect').value;
        const text = input.value.trim();

        if (!text) {
            alert('Please enter a task!');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            priority: priority,
            createdAt: new Date().toISOString()
        };

        this.todos.push(todo);
        this.saveToStorage();
        input.value = '';
        document.getElementById('prioritySelect').value = 'medium';
        this.render();
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToStorage();
            this.render();
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.saveToStorage();
        this.render();
    }

    clearCompleted() {
        this.todos = this.todos.filter(t => !t.completed);
        this.saveToStorage();
        this.render();
    }

    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            case 'high':
                return this.todos.filter(t => t.priority === 'high');
            default:
                return this.todos;
        }
    }

    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const progress = total === 0 ? 0 : (completed / total) * 100;

        document.getElementById('totalTodos').textContent = total;
        document.getElementById('completedTodos').textContent = completed;
        document.getElementById('progressFill').style.width = progress + '%';
        document.getElementById('todoCount').textContent = `${total} task${total !== 1 ? 's' : ''}`;
    }

    render() {
        const filtered = this.getFilteredTodos();
        const list = document.getElementById('todoList');
        const emptyState = document.getElementById('emptyState');

        list.innerHTML = '';

        if (filtered.length === 0) {
            emptyState.classList.add('show');
        } else {
            emptyState.classList.remove('show');
            filtered.forEach(todo => {
                const item = document.createElement('div');
                item.className = `todo-item ${todo.completed ? 'completed' : ''}`;
                item.innerHTML = `
                    <input 
                        type="checkbox" 
                        class="todo-checkbox" 
                        ${todo.completed ? 'checked' : ''}
                        onchange="app.toggleTodo(${todo.id})"
                    >
                    <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                    <span class="todo-priority priority-${todo.priority}">${todo.priority}</span>
                    <button class="todo-delete" onclick="app.deleteTodo(${todo.id})">Delete</button>
                `;
                list.appendChild(item);
            });
        }

        this.updateStats();
    }

    exportTodos() {
        const dataStr = JSON.stringify(this.todos, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `todos_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }

    importTodos(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported = JSON.parse(e.target.result);
                if (Array.isArray(imported)) {
                    this.todos = imported;
                    this.saveToStorage();
                    this.render();
                    alert('Todos imported successfully!');
                } else {
                    alert('Invalid file format!');
                }
            } catch (error) {
                alert('Error importing file: ' + error.message);
            }
        };
        reader.readAsText(file);
        event.target.value = '';
    }

    resetAll() {
        if (confirm('Are you sure? This will delete all tasks permanently.')) {
            this.todos = [];
            this.saveToStorage();
            this.render();
        }
    }

    saveToStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadFromStorage() {
        const stored = localStorage.getItem('todos');
        return stored ? JSON.parse(stored) : [];
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

// Initialize app when DOM is loaded
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new TodoApp();
});
