<?php

namespace App\Http\Requests\Category;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|min:2|max:255|unique:categories,name'
        ];
    }

    /**
     * @return array
     */
    public function getData()
    {
        $name = $this->name;

        $data = [
            'name' => $name,
            'slug' => str_slug($name)
        ];

        return $data;
    }
}
