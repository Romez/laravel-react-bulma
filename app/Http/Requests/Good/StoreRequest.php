<?php

namespace App\Http\Requests\Good;

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
            'category'    => 'required|integer|exists:categories,id',
            'name'        => 'required|string|min:1|max:255',
            'description' => 'required|string|min:1|max:255',
            'image'       => 'required|image|max:4096',
        ];
    }
}
